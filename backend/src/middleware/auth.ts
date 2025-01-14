import { expressjwt, GetVerificationKey } from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import dotenv from 'dotenv';
dotenv.config();

const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    cache: true,
    rateLimit: true,
  }) as unknown as GetVerificationKey,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

export default checkJwt;
