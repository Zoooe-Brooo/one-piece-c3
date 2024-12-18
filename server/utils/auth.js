const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
	AuthenticationError: new GraphQLError('Could not authenticate user.', {
		extensions: {
			code: 'UNAUTHENTICATED',
		},
	}),
	authMiddleware: function ({ req }) {
		let token =
			req.body.token || req.query.token || req.headers.authorization;

		if (req.headers.authorization) {
			token = token.split(' ').pop().trim();
		}

		if (!token) {
			return req;
		}

		try {
			const { data } = jwt.verify(token, secret, { maxAge: expiration });
			req.user = data;
		} catch (error) {
			console.log('Invalid token', error.message);
			throw new GraphQLError('Invalid token', {
				extensions: { code: 'UNAUTHENTICATED' },
			});
		}

		return req;
	},
	signToken: function ({ firstName, email, _id }) {
		const payload = { firstName, email, _id };

		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
};
