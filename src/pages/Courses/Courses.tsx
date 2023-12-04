import {HeaderImage} from "../../components/HeaderImage/HeaderImage.tsx";
import {CoursesList} from "../../components/CoursesList/CoursesList.tsx";
import {TrainingFormat} from "../../components/TrainingFormat/TrainingFormat.tsx";
import {FAQ} from "../../components/FAQ/FAQ.tsx";

// import {Footer} from "../../components/Footer/Footer.tsx";

export const Courses = () => {
    const headerImageUrl = 'public/image/courses-header-image.jpg'
    const headerTitle = "КУРСЫ"
    const headerDescription = "";

    return (
        <>
            <HeaderImage imageUrl={headerImageUrl} title={headerTitle} description={headerDescription}/>
            <CoursesList/>
            <TrainingFormat/>
            <FAQ/>
        </>
    );
};
