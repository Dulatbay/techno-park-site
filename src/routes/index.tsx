import { createHashRouter } from 'react-router-dom'
import { AboutITParkPage } from '../pages/AboutITPark/AboutITParkPage.tsx'
import { AboutTechnoParkPage } from '../pages/AboutTechnoPark/AboutTechnoParkPage.tsx'
import { Courses } from '../pages/Courses/Courses.tsx'
import { Enactus } from '../pages/Enactus/Enactus.tsx'
import EntrepreneurshipOffice from '../pages/EntrepreneurshipOffice/EntrepreneurshipOffice.tsx'
import { HardwarePage } from '../pages/Hardware/HardwarePage.tsx'
import { Homepage } from '../pages/Home/HomePage.tsx'
import { MainLayout } from '../pages/MainLayout/MainLayout.tsx'
import { News } from '../pages/News/News.tsx'
import NewsForm from '../pages/NewsForm/NewsForm.tsx'
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage.tsx'
import { Register } from '../pages/Register/Register.tsx'
import { Software } from '../pages/Software/Software.tsx'

const router = createHashRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/about-it-park',
				element: <AboutITParkPage />,
			},
			{
				path: '/it-park-projects',
				element: <ProjectsPage />,
			},
			{
				path: '/hardware',
				element: <HardwarePage />,
			},
			{
				path: '/office',
				element: <EntrepreneurshipOffice />,
			},
			{
				path: '/software',
				element: <Software />,
			},
			{
				path: '/enactus',
				element: <Enactus />,
			},
			{
				path: '/about-techno-park',
				element: <AboutTechnoParkPage />,
			},
			{
				path: '/courses',
				element: <Courses />,
			},
			{
				path: '/news',
				element: <News />,
			},
			{
				path: '/login',
				element: <Register />,
			},
			{
				path: '/news-form',
				element: <NewsForm />,
			},
		],
	},
])

export default router
