import PagesMetaHead from "../../components/PagesMetaHead";

function index() {
  return (
    <div className="container mx-auto">
     <PagesMetaHead title="Projects" /> 
     <div className="flex flex-col items-center mt-6 sm:mt-8">
       <img
         src="/images/Card-and-Click:Play.png"
         alt="Card Click and Play Demo"
         className="rounded-lg shadow-lg w-full max-w-md mb-3"
       />
       <a
         href="https://sheharzad-developer.github.io/Card-Click-and-Play/"
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
       >
         Play Card Click and Play
       </a>
     </div>
    </div>
  );
}

export default index;
