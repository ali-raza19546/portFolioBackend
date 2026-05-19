              DATE : 8-2-2026 SUNDAY
Question : jab bhi hum koi dosri file create krtey hen to usmein her bar mongoose ko kun required krna prta he?
Answer : kun ke node.js mein her file apna alag scope rakhti he, ek file mein require ki hui cheez dusri file mein automatically available nahi hoti

Question : jab mein ne dosri file banai to usmein mongoose ko connect krney wala setup kun likha ? 
Answer : Koi zrori nahi ap alag aik file bana kr usey export kr sktey ho aur jahan chao import kr saktey ho.

Question : sample data ka jo array tha kiya usko object banana zrori tha module.exports =  {data.sampleData}?
Answer : Object banane ka reason: agar aap future mein ek se zyada cheezen export karna chahte ho, to better structure hota hai.

Question : Listing mein hum ne sampleData insert kiya to wo kaha giya hoga kiya documents jo ke Schema he usmein?
Answer : Summary: Schema define karta hai structure, Model use karta hai collection ke liye, aur insert karne par data collection ke documents mein chala jata hai.

Question : App.set("view engine", "view" ) kis liay he aur isey set hi kun kiya koi aur trika nahi he?
Answer : Express ab .ejs files ko render kar sakta hai. Jab aap res.render("home") likhenge, Express automatically home.ejs file ko find karke HTML me convert karke browser ko bhejta hai.

Question : app.set("views" path.join(__dirname, "views")) path.join kun kiya aur ye dirname kiya he underScore ka kiya mtlab he aur uper to view likha howa tha ab views kun he aur kiya folder ka name views ki jagah koi aur likh sktey hen?
Answer : __dirname → current file ka path path.join → path safely join karne ke liye "views" → Express ko folder location batata hai Folder ka naam change karna possible hai, default convention views hai

Question : hum ne aik aur route banaya jis mein hum ne listing.find({}) ye istarah kun likha listing to aik documents ka kaam kar rahi he?
Answer : listing → Mongoose model → MongoDB collection ke documents ko represent karta hai. .find({}) → collection ke saare documents retrieve karne ke liye. {} → empty filter → “sab documents lo” Agar filter chahiye → { field: value } use kar sakte hain.

Question : Ab to hum for of loop laga rahy hen sarey title access krney ke liay ejs mein ager humey react mein krna hota to kaisey kartey aur ejs itni tough kun he?
                           
                           DATE : 9-2-2026 Monday
Question : ager app.get("/listing/:id",) ager is tarah hum id ko kaiey access krien ge aur iskey kitney trikey hen aur params kiya hen ager hum params na lagaien to kiya hoga clearly batao? aur hum ne istarah kun likha let {id} = req.params?
Answer : :id URL ka dynamic part hai. Express usay req.params mein rakhta hai . req.params ke baghair dynamic route possible nahi Destructuring sirf code clean karne ke liye hoti hai;

Question : app.use(express.urlencoded({ extended: true })); is line ka kya mtlab he aur urlencoded kiya krta he aur extended kiya he aur ye object mein kun he?
Answer : urlencoded form data ko object banata hai. extended: true complex/nested data allow karta hai. Is ke baghair req.body kaam nahi karta
                       DATE : 14-2-2026
Question : MethodOverRide Kis liay use kiya jata he?
Answer : MehodOverRide use kiya jata he kun ke form mein sirf get aur post ki request ja sakti he aur ager humy delete request ya update request bhejni ho to hum use krtey hen methodOverRide ka aur iska use kuch istarah ka hota he action="path ka name?_method="delete ya update"" jo bhejna he aiesy bhejo phr app mein usey accept kro app.delete("/delete", (req, res) => {ab operation likho }) ;

Question : WrapAsync kiya he aur kun use kiya jata he?
Answer : WrapAsync aik function he jo basically error ko handle krney ke liay likha jata he jahan try ya catch likha giya ho to usko replace kr ke hum behtr solution mein WrapAsync use kr saktey hen. useCase (fn) => { return (req, res, next) => { fn(req, res, next).cathc(err) } }

Question : ExpressError kiya he aur kyun use kiay jatey hen?
Answer : Basically ye bhi error handle krney ke liay use kiay jatey hen. useCase class ExpressError extends Error{ constructor(statusCode, message){ super(); this.statusCode = statusCode, this.message = message } };

Question : Ejs Mate kis liay use kiya jata he?
Answer : Ejs mate use kiya jata he aik boilerplate bananey ke liay aur us boilerplate ko her page pr use krney ke liay jaiesa ke navBar ya footer ye her page pr show hotey hen isliay inki aik boilerplate banai jati he phr inko her page pr use kiya jata he kuch is tarah se <% layout("/layouts/boilerplate") %> /layouts folder ka name jis mein boilerplate file pari he. ab is boilerplate ko use krney ke liay jis file mein use krna ho uska head part hata kr yehi link lagaya jata he.

Question : Valid Schema yani npm joi kis liay use hota he?
Answer : joi use kiya jata he valid Schema ke liay takey jo bhi details schema mein banai jati he bilkul waisey hi user se sahi chaiey request kahin se bhi aay USE-CASE aik file banao aur joi ko require kro phr aik veriable banao jis mein joi.object{} phr is object ke ander listing : joi.object({}) phr is object ander jo information ap ne schema mein likhi he wohi dalo jaiesy username string he to string hona chaiey aur required hona chaiey price number hona chaiey aur number negative na ho isliay .min(0) yani 0 se bara ho ;
    
                                         DATE : 16-2-2026
Question : kuch function jo janeny chaiey jaisey ager aik user he aur usey multiple order krney hen chaiey product ke liay ya phr khany ke liay ab user 1 he aur order multiple kr skta he to humy aik function banana hoga one to many, many to many 
Question : mongoose ectually kis liay use hota he?

Question : hamara node js mein code likheny ka faieda kiya he?

Question :humy ectually kiya krna hota he as a backend developer?

Question : kiya backend developer ko is tarah code likhna hota he ke wo user ka data database mein save kr wa sakey aur jab user mangey to usey data base se nikaal kr show kr waya jaiey?

Question : Server ko kaisey validate krna chaiey mujhy itna batao ke jab mein shuru krun backend banana to kin cheezon ka khiyal rakhna chaiey main main bato itna deep mein na batao?

Question : pora process hota kis liay he jaiiesy humy kiya kiya krna hota he route bana jatey hen aur kiya kiya kiya jata he server side mein