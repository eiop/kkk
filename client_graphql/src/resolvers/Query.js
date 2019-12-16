import getUserId from '../utils/getUserId'
const jwt = require('jsonwebtoken');
const var_dump = require('var_dump')


const Query = {
    users(parent, args, { prisma }, info) {
        const opArgs = {
            first: args.first,
            skip: args.skip,
            after: args.after,
            orderBy: args.orderBy
        }

        if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }]
            }
        }

        return prisma.query.users(opArgs, info)
    },
    me(parent, args, { prisma, request }, info) {
        const userId = getUserId(request)

        return prisma.query.user({
            where: {
                id: userId
            }
        })
    },
    async login(parent, args, { prisma,passport,util }, info) {
        //console.log(info)
        //const {email,password} = args.data
        //console.log(password);
        // const user = {
        //     "id": "5dc56ee024aa9a0007d7a816",
        //     "name": "dsfdsf",
        //     "email": "asdsad@dsf.com"
        // }
        // return { token: 'sdfdsfdsf', user };
        console.log('11');
        
var ress ={IncomingMessage:{
    headers:{
        ...args.data
    }
}}
console.log(ress);

         passport.authenticate('local', { session: false }, function(err, user) {
            //var_dump(err)
            console.log("33");
            
            ress.user = user
          })(info,ress);
          console.log("44");
          console.log(ress);
          
          
return ress
        //return {token:'sdfdsf',user}
        






            // ((req, res, next) => {
            //     console.log('2');
                //              passport.authenticate('local', { session: false }, (err, user, info) => {
                //                 // console.log(user);
                //                 // if (err || !user) {
                //                 //     throw new Error(err);
                //                 // }

                //                 // return login(user, {session: false}, (err) => {
                //                 //     if (err) {
                //                 //         throw new Error(err);
                //                 //     }

                //                 //     const token = jwt.sign(user ,process.env.JWT_SECRET) || 'jhjhjh';


                //                 // });
                //                 //    return {user:{
                //                 //     "id": "5dc56ee024aa9a0007d7a816",
                //                 //     "name": "dsfdsf",
                //                 //     "email": "asdsad@dsf.com"
                //                 //   }, token:'hhhhh'};

                // console.log(user);

                //     return next({ user, token: 'hhhhh' });

                // })(req, res, next)

                // console.log(dd);


            // })
    }
}
export { Query as default }