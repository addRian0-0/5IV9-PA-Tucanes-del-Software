import NextAuth from "next-auth";
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Google({ 
            clientId: '240617596486-e60g1iuj42ff45sevfsdrhntc5jmm2e2.apps.googleusercontent.com', 
            clientSecret: 'lyP4E5oAinRoOjckt0Fgfh9K',
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        })
    ],
    jwt:{
        encryption: true
    },
    secret: process.env.SECRET,
    callbacks: {
        async jwt(token, account){
            if(account?.accesToken){
                token.accesToken = account.accesToken;
            }
            return token;
        },
        redirect: async(url, _baseUrl) => {
            if(url === '/profile'){
                return Promise.resolve('/');
            }
            return Promise.resolve('/');
        }
    }
})