import courses from "../helpers/courses.json";

export const GetCourseDetailsById = (id: number) => {
  const courseDetails = courses?.courses?.find((item: any) => item.id == id);
  return courseDetails;
};
