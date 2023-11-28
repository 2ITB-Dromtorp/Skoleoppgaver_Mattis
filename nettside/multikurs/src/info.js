import { useParams, Link } from "react-router-dom"

export default function Info () {
   const { courseId } = useParams();

   let courseContent

   switch (courseId) {
      case "norsk":
         courseContent = (
            <>
               <h2>Norsk</h2>
               <p> Dere må møte opp ved universitetet i oslo og dere må ha med skrivesaker og litt mat og drikke. For mer info ta kontakt med Matheo
                  Tlf: 123 45 67</p> 
            </>
         );
         break;
      case "heimkunnskap":
         courseContent = (
            <>
               <h2>Heimkunnskap</h2>
               <p> Vi møtes Palmen Restaurant & Bar i Oslo kl 12:00. og du må ikke ha med deg noe untatt en forkle. For mer info ta kontakt med Matheo
                  Tlf: 123 45 67</p>
            </>
         );
         break;
      case "kroppsoving":
         courseContent = (
            <>
               <h2>Kroppsøving</h2>
               <p> Du må møte opp ved sats akersgata i Oslo, kl 11:00 og må ha med trenings tøy. vi steller til mat der borte kl 13.00. For mer info ta kontakt med Matheo
                  Tlf: 123 45 67</p>
            </>
         );
         break;
      case "datakunnskap":
         courseContent = (
            <>
               <h2>Datakunnskap</h2>
               <p> Det er oppmøte i rådhusplassen, kl 12:30 og du trenger å ha med deg en laptop, litt mat og drikke og godt humør. For mer info ta kontakt med Matheo
                  Tlf: 123 45 67</p>
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