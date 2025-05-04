import Image from 'next/image'
import { FiClock, FiTag } from 'react-icons/fi'
import PagesMetaHead from '../../components/PagesMetaHead'

function ProjectSingle (props) {
  if (!props.project) {
    return (
      <div className='container mx-auto'>
        <PagesMetaHead title="Project Not Found" />
        <div className='text-center mt-20'>
          <h1 className='text-2xl font-bold text-primary-dark dark:text-primary-light'>
            Project Not Found
          </h1>
          <p className='mt-4 text-ternary-dark dark:text-ternary-light'>
            The project you are looking for does not exist.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto'>
      <PagesMetaHead title={props.project.title} />

      {/* Header */}
      <div>
        <p className='font-general-medium text-left text-2xl sm:text-3xl font-bold text-primary-dark dark:text-primary-light mt-8 sm:mt-12 mb-4'>
          {props.project.ProjectHeader.title}
        </p>
        <div className='flex'>
          <div className='flex items-center mr-6'>
            <FiClock className='text-lg text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {props.project.ProjectHeader.publishDate}
            </span>
          </div>
          <div className='flex items-center'>
            <FiTag className='w-4 h-4 text-ternary-dark dark:text-ternary-light' />
            <span className='font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light'>
              {props.project.ProjectHeader.tags}
            </span>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-6 mt-6'>
        {props.project.ProjectImages.map(project => {
          return (
            <div className='mb-6 sm:mb-0' key={project.id}>
              <a href={project.img} target='_blank' rel='noopener noreferrer'>
                <Image
                  src={project.img}
                  className='rounded-xl cursor-pointer shadow-lg sm:shadow-none'
                  alt={project.title}
                  key={project.id}
                  layout='responsive'
                  width={100}
                  height={90}
                />
              </a>
            </div>
          )
        })}
      </div>

      {/* Info */}
      <div className='block sm:flex gap-0 sm:gap-6 mt-8'>
        <div className='w-full sm:w-1/3 text-left'>
          {/* Single project client details */}
          <div className='mb-4'>
            <p className='font-general-regular text-lg sm:text-xl font-semibold text-secondary-dark dark:text-secondary-light mb-2'>
              {props.project.ProjectInfo.ClientHeading}
            </p>
            <ul className='leading-loose'>
              {props.project.ProjectInfo.CompanyInfo.map(info => {
                return (
                  <li
                    className='font-general-regular text-ternary-dark dark:text-ternary-light'
                    key={info.id}
                  >
                    <span>{info.title}: </span>
                    {info.title === 'Website' ? (
                      <a
                        href={info.details}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                      >
                        {info.details}
                      </a>
                    ) : (
                      info.details
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Single project objectives */}
          <div className='mb-4'>
            <p className='font-general-regular text-lg sm:text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
              {props.project.ProjectInfo.ObjectivesHeading}
            </p>
            <p className='font-general-regular text-primary-dark dark:text-ternary-light'>
              {props.project.ProjectInfo.ObjectivesDetails}
            </p>
          </div>

          {/* Single project technologies */}
          <div className='mb-4'>
            <p className='font-general-regular text-lg sm:text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
              {props.project.ProjectInfo.Technologies[0].title}
            </p>
            <p className='font-general-regular text-primary-dark dark:text-ternary-light'>
              {props.project.ProjectInfo.Technologies[0].techs.join(', ')}
            </p>
          </div>

          {/* Single project social sharing */}
          <div>
            <p className='font-general-regular text-lg sm:text-xl font-semibold text-ternary-dark dark:text-ternary-light mb-2'>
              {props.project.ProjectInfo.SocialSharingHeading}
            </p>
          </div>
        </div>

        {/*  Single project right section details */}
        <div className='w-full sm:w-2/3 text-left mt-6 sm:mt-0'>
          <p className='text-primary-dark dark:text-primary-light text-lg sm:text-xl font-bold mb-4'>
            {props.project.ProjectInfo.ProjectDetailsHeading}
          </p>
          {props.project.ProjectInfo.ProjectDetails.map(details => {
            return (
              <p
                key={details.id}
                className='font-general-regular mb-3 text-base sm:text-lg text-ternary-dark dark:text-ternary-light'
              >
                {details.details}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectSingle
