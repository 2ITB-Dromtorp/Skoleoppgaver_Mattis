import { useParams, Link } from "react-router-dom"

export default function Info () {
   const { courseId } = useParams();

   let courseContent

   switch (courseId) {
      case "norsk":
         courseContent = (
            <>
               <div>Norsk</div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
            </>
         );
         break;
      case "heimkunnskap":
         courseContent = (
            <>
               <div>Heimkunnskap</div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </>
         );
         break;
      case "kroppsoving":
         courseContent = (
            <>
               <div>Kroppsøving</div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </>
         );
         break;
      case "datakunnskap":
         courseContent = (
            <>
               <div>Datakunnskap</div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
            </>
         );
         break;
   }

   return (
      <>
      <div id="tilbake">
      <Link className="fancy_button" to="/">Gå tilbake</Link>
      </div>
         <div id="course_container">
            <div className="square" >
               {courseContent}
            </div>
         </div>
      </>
   )
}