import prisma from './prisma'
var passport = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = passportJWT.Strategy;
`console.log("22");`
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (email, password, cb) {
        //console.log(email + password);
        console.log("22");

        const user = {
            "id": "5dc56ee024aa9a0007d7a816",
            "name": "dsfdsf",
            "email": "asdsad@dsf.com"

        }
        return cb(null, { token: 'sdfdsfdsf', user });

        // const user = await prisma.query.user({
        //     where: {
        //         id: '5dc56ee024aa9a0007d7a816'
        //     }
        // })
        //     return cb(null, user, {
        //         message: 'Logged In Successfully'
        //     });


        //Assume there is a DB module pproviding a global UserModel
        // return prisma.query.user({ where: {email, password}})
        //     .then(user => {
        //         if (!user) {
        //             return cb(null, false, { message: 'Incorrect email or password.' });
        //         }

        //         return cb(null, user, {
        //             message: 'Logged In Successfully'
        //         });
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });


        // return prisma.query.user({
        //     where: {
        //         email: args.data.email
        //     }
        // }).then(user => {

        //     if (!user) {
        //         return cb(null, false, { message: 'Incorrect email or password.' });
        //     }

        //     const isMatch = bcrypt.compare(args.data.password, user.password)

        //     if (!isMatch) {
        //         return cb(null, false, { message: 'Incorrect email or password.' });
        //     }

        //     return cb(null, user, {
        //         message: 'Logged In Successfully'
        //     });
        // }).catch(err => {
        //     return cb(err);
        // });
    }
));

// passport.use(new JWTStrategy({
//     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.JWT_SECRET
// },
//     function (jwtPayload, cb) {

//         //find the user in db if needed
//         return prisma.query.user({ where: { id } })
//             .then(user => {
//                 return cb(null, user);
//             })
//             .catch(err => {
//                 return cb(err);
//             });
//     }
// ));


export { passport as default }