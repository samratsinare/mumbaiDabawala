 
 const express = require("express");

 const cors = require("cors");

 const multer = require("multer");

 const upload = multer();

const { response } = require("express");

const adduser = require("./adduser");


  const app = express();

  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use(express.json());

  app.post("/adduser",async(request,response)=>
  {
    response.setHeader("Access-Control-Allow-Origin","*");
         try
         {
            const input = request.body;

            await adduser.adduser(input);

            response.json({ message: "success post" });
         }
         catch(err)
         {
            response.json({ message: "failure post" });
         }

  });


    app.post("/loginuser", async (req,res) =>
    {
     res.setHeader("Access-Control-Allow-Origin","*");

      try{

         const input = req.body;

        await adduser.loginuser(input);

        res.json({opr:true});

      }
      catch(err)
      {
        res.json({opr: false});
      }

    });

    app.post("/addorder",async(request,response)=>
  {
    response.setHeader("Access-Control-Allow-Origin","*");
         try
         {
            const input = request.body;

            await adduser.addorder(input);

            response.json({opr: true});
         }
         catch(err)
         {
            response.json({ opr: false });
         }

  });

  app.post("/stopservice", async (req,res) =>
    {
     res.setHeader("Access-Control-Allow-Origin","*");

      try{

         const input = req.body;

        await adduser.stopservice(input);

        res.json({opr:true});

      }
      catch(err)
      {
        res.json({opr: false});
      }

    });

    app.post("/forgotpassword", async (req,res) =>
    {
     res.setHeader("Access-Control-Allow-Origin","*");

      try{

         const input = req.body;

        await adduser.forgotpassword(input);

        res.json({opr:true});

      }
      catch(err)
      {
        res.json({opr: false});
      }

    });




    app.listen(5700);