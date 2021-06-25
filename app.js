var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var httpsProxyAgent = require('https-proxy-agent');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();
////---------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



const cookies=' poptin_user_id=0.in3hb3rv6vn; __auc=6c031163179ac7ba0f502f2f90d; _ga=GA1.3.1158977499.1622096454; _fbp=fb.2.1622096454119.1209958399; poptin_user_ip=2001:4df4:3d9:8300:6d30:c8e:ce48:5432; poptin_c_visitor=true; dd44dd__datedos_mobile=1; _gid=GA1.3.450033772.1622394315; poptin_referrer=https://www.date4dos.co.il/members/my_twins/; _gat_gtag_UA_21756335_1=1; PHPSESSID=fcad7af64eaefd647e4a53c1879aee61; __asc=6564aabb179c8bdffe46a7d8a17; poptin_old_user=true; poptin_session=true; outbrain_cid_fetch=true; clix.session=9461620245002024; dd44dd__datedosLoginUser=roeysdomi15%40gmail.com; dd44dd__datedosLoginPrefix=mem_; dd44dd__datedosLoginPwd=1e28023aba6dc9b6b84bd572b61a7a65'

const body='form[show]=0&form[filter]=0&form[mem_area]=0&form[mem_name]=0&form[mem_gender]=0&form[age_from]=0&form[age_upto]=0&form[mem_city_dist]=&form[mem_photo1]=false&form[mem_religion_sector]=0&form[height_from]=0&form[height_upto]=0&form[mem_family_stat]=0&form[mem_prayer_time]=0&form[mem_origin]=0&form[mem_education]=0&form[mem_economics_situation]=0&form[mem_subscription_status]=0&form[mem_member_type]=0&form[mem_smoking]=0&form[mem_zodiac]=0&form[mem_profession]=0&form[mem_head_covering]=0&folder=0&search_type=simple&search_url=https://www.date4dos.co.il/members/online/&start=0&csrf=48dcbaa0a6704417dfead4dfe820199ad7dbca5f79ffdc408e1a8b19ff825650f23a02897b470c953ab097ecda1e70d7b70e59c6c6ad29f44897971403ca0cb712af2925181946624098ed2711ec41408e3b6fe51160f407ef39edead38b8451ce6c08c1957de49acc120d10914f8c5c412975ba54ff98d7720bd0675da35a58ac5f315fe3c994003a1535c9a48be969f6f116ceb865e2d76252dee057d7f89a72584b8512082303e07f14f66405e9359d256bdedee6fae7bb78a2971394bd0b';
app.use('/online', (req,res)=>
 {
   try{

           fetch("https://www.date4dos.co.il/members/online/?get_members=",{

           method: 'POST',
           body:JSON.stringify(body),
           headers: {
           "Accept": "application/json",
           'Content-Type': 'application/json',
           'Cookie':cookies
         }})
           .then(response => {
          return response.json() })
           .then(data => {

                  res.json(data)

           })

      }
      catch(err)
      {
         console.log(err);
      }


  })


  const body2='form[show]=0&form[filter]=0&form[mem_area]=0&form[mem_name]=0&form[mem_gender]=0&form[age_from]=0&form[age_upto]=0&form[mem_city_dist]=&form[mem_photo1]=0&form[mem_religion_sector]=0&form[height_from]=0&form[height_upto]=0&form[mem_family_stat]=0&form[mem_prayer_time]=0&form[mem_origin]=0&form[mem_education]=0&form[mem_economics_situation]=0&form[mem_subscription_status]=0&form[mem_member_type]=0&form[mem_smoking]=0&form[mem_zodiac]=0&form[mem_profession]=0&form[mem_head_covering]=0&folder=0&search_type=simple&search_url=https://www.date4dos.co.il/email/inbox/&start=0&csrf=48dcbaa0a6704417dfead4dfe820199ad7dbca5f79ffdc408e1a8b19ff825650f23a02897b470c953ab097ecda1e70d7b70e59c6c6ad29f44897971403ca0cb712af2925181946624098ed2711ec41408e3b6fe51160f407ef39edead38b8451ce6c08c1957de49acc120d10914f8c5c412975ba54ff98d7720bd0675da35a58a6c4396ecd498c6b6cdf0d73cefe8422ba3f77dba87f54bd6870c409feeabaa04e3f4571e40d558ae4287ec41ba47394a81d4b1da2f9b1b53d52f8c20ce097a3';


  app.use('/chat', (req,res)=>
   {
     try{
         // const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:8888');
               fetch("https://www.date4dos.co.il/email/inbox/?get_emails",{
              // agent: proxyAgent,
               method: 'POST',
               body:body2,
               headers: {
               "Accept": "application/json",
               'Content-Type': 'application/json',
               'Cookie':cookies
             }})
               .then(response => {
              return response.json() })
               .then(data => {
                      console.log(data);
                      res.json(data)

               })

        }
        catch(err)
        {
           console.log(err);
        }
  })
  const removelet=(word)=>
  {
         let spl=word.split("\t")
         let len=spl.length
         let str="";
         for(let i=0;i<len;i++)
         {
              if(spl[i]!=="")
              {
                str=str+spl[i]
              }
         }
         let spl2=str.split("\n")
         let len2=spl2.length
         let str2="";
         for(let i=0;i<len2;i++)
         {
              if(spl2[i]!=="")
              {
                str2=str2+spl2[i]
              }
         }

         return str2;

  }

app.post("/profile",(req,res)=>
          {
                console.log(req.query);
            try{
                // const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:8888');
                      fetch(`https://www.date4dos.co.il/members/member_profile/${req.query.id}/?ajaxload=1&js_page_load=1`,{
                     // agent: proxyAgent,
                      method: 'GET',

                      headers: {
                      "Accept": "application/json",
                      'Content-Type': 'application/json',
                      'Cookie':cookies,
                    }})
                      .then(response => {
                     return response.text() })
                      .then(data => {


                            const dom = new JSDOM(data);
                            // const aboutme= Array.from(dom.window.document.documentElement.querySelectorAll("#tab_profile > div:nth-child(1) > div.profile_content_info > p:nth-child(1)"),e=>e.textContent)
                            // const location= dom.window.document.querySelector("div.member_where").textContent
                            console.log("data")

                            let location= dom.window.document.querySelector("#top_left_box > div:nth-child(5) > div.box-text").textContent
                             let aboutme= dom.window.document.documentElement.querySelector("#more_right_box > div > div.box-text").textContent
                            let name= dom.window.document.documentElement.querySelector("div.box-subtitle").textContent
                            let aboutpartner= dom.window.document.documentElement.querySelector("#more_left_box > div:nth-child(2) > div.box-text").textContent
                            let height= dom.window.document.documentElement.querySelector("#more_info_box > div.more_right_box > div:nth-child(5) > div.box-text").textContent
                            let pics=Array.from(dom.window.document.querySelectorAll(".more-pics"),e=>e.src)
                            let age= dom.window.document.documentElement.querySelector("#top_left_box > div:nth-child(1) > div.box-text").textContent


                            //Array.from(window.document.querySelectorAll(".more-pics"),e=>e.src)
                            height=removelet(height)
                            age=removelet(age)

                            aboutpartner=removelet(aboutpartner)

                            aboutme=removelet(aboutme)

                            location=removelet(location)
                            name=removelet(name)
                            // status=removelet(status)

                            // console.log(data)
                              let user2={location,name,aboutme,aboutpartner,height,pics,age};

                             res.json(user2)
                      })

               }
               catch(err)
               {
                  console.log(err);
               }


          }
)
//messeges
//https://www.date4dos.co.il/email/inbox/&get_emails



app.use('/messeges', (req,res)=>
 {
   try{

           fetch("https://www.date4dos.co.il/email/inbox/&get_emails",{

           method: 'POST',
           body:'folder=0&limit=50&start=0',
           headers: {
           "Accept": "application/json",
           'Content-Type': 'application/json',
           'Cookie':cookies
         }})
           .then(response => {
          return response.json() })
           .then(data => {

                  res.json(data)

           })

      }
      catch(err)
      {
         console.log(err);
      }


  })

  const body3='form[show]=0&form[filter]=0&form[mem_area]=0&form[mem_name]=0&form[mem_gender]=0&form[age_from]=0&form[age_upto]=0&form[mem_city_dist]=&form[mem_photo1]=false&form[mem_religion_sector]=0&form[height_from]=0&form[height_upto]=0&form[mem_family_stat]=0&form[mem_prayer_time]=0&form[mem_origin]=0&form[mem_education]=0&form[mem_economics_situation]=0&form[mem_subscription_status]=0&form[mem_member_type]=0&form[mem_smoking]=0&form[mem_zodiac]=0&form[mem_profession]=0&form[mem_head_covering]=0&folder=0&search_type=simple&search_url=https://www.date4dos.co.il/members/viewed_me/&start=100&csrf=48dcbaa0a6704417dfead4dfe820199ad7dbca5f79ffdc408e1a8b19ff825650f23a02897b470c953ab097ecda1e70d7b70e59c6c6ad29f44897971403ca0cb712af2925181946624098ed2711ec41408e3b6fe51160f407ef39edead38b8451ce6c08c1957de49acc120d10914f8c5c412975ba54ff98d7720bd0675da35a58bc552eee5802f5dba636e77fb3d6d7c3763493e191d7127a68dcd1190d4379b15f57d85f258d088c01567249213eeeb681dd75697f4389cad5cf97c9efde2686';

  app.use('/views', (req,res)=>
   {
     try{

             fetch("https://www.date4dos.co.il/members/viewed_me/?get_members",{

             method: 'POST',
             body:body3,
             headers: {
             "Accept": "application/json",
             'Content-Type': 'application/json',
             'Cookie':cookies
           }})
             .then(response => {
            return response.json() })
             .then(data => {

                    res.json(data)

             })

        }
        catch(err)
        {
           console.log(err);
        }


    })

    //-----------------------------------------------------
const body4='csrf_token=48dcbaa0a6704417dfead4dfe820199ad7dbca5f79ffdc408e1a8b19ff825650f23a02897b470c953ab097ecda1e70d7b70e59c6c6ad29f44897971403ca0cb712af2925181946624098ed2711ec41408e3b6fe51160f407ef39edead38b8451ce6c08c1957de49acc120d10914f8c5c412975ba54ff98d7720bd0675da35a5899459633758ce5593bc5078c42c68aed93ffcf6909ef9a9c280cae4875bb480feeb2b18aca2de9bd6a41b09d00afd73e0a1b81d7b0a66f738a22f3a917039e64';
const coki='poptin_user_id=0.in3hb3rv6vn; __auc=6c031163179ac7ba0f502f2f90d; _ga=GA1.3.1158977499.1622096454; _fbp=fb.2.1622096454119.1209958399; poptin_user_ip=2001:4df4:3d9:8300:6d30:c8e:ce48:5432; poptin_c_visitor=true; dd44dd__datedos_mobile=1; dd44dd__datedosLoginUser=roeysdomi15%40gmail.com; dd44dd__datedosLoginPrefix=mem_; dd44dd__datedosLoginPwd=1e28023aba6dc9b6b84bd572b61a7a65; poptin_old_user=true; _gid=GA1.3.32407468.1622930113; PHPSESSID=q9oi0p45lfse6lfk689k9bl8q4; clix.session=6245541517111683; __asc=2dab4d30179de50ab45c3a65d96; poptin_referrer=https://www.date4dos.co.il/; _gat_gtag_UA_21756335_1=1; _gat_UA-21756335-1=1; outbrain_cid_fetch=true; poptin_session=true';
    app.use('/chatbox', (req,res)=>
     {
       try{

               fetch(`https://www.date4dos.co.il/members/member_profile/${req.query.id}/&get_comments`,{

               method: 'POST',
               body:body4,
               headers: {
               "Accept": "application/json",
               'Content-Type': 'application/json',
               'Cookie':coki
             }})
               .then(response => {
              return response.json() })
               .then(data => {

                      res.json(data)

               })

          }
          catch(err)
          {
             console.log(err);
          }


      })

app.listen(5000, console.log(`Server running on  5000`));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
