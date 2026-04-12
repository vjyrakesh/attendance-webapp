import { useQuery } from '@tanstack/react-query';
import TeacherService from '../api/TeacherService';
import StandardService from '../api/StandardService';
import SubjectService from '../api/SubjectService';
import StudentService from '../api/StudentService';

export function useGetTeachersQuery() {
    return useQuery({
        queryKey: ['teachers'], 
        queryFn: () => TeacherService.getAllTeachers()
    });
}

export function useGetOneTeacherQuery(teacherId) {
    return useQuery({
        queryKey: ['teacher', teacherId],
        queryFn: () => TeacherService.getOneTeacher(teacherId)
    });
}

export function useGetStandardsQuery() {
    return useQuery({
        queryKey: ['standards'],
        queryFn: StandardService.getAllStandards
    });
}

export function useGetSubjectsQuery() {
    return useQuery({
        queryKey: ['subjects'],
        queryFn: SubjectService.getAllSubjects
    });
}

export function useGetStudentsQuery() {
    return useQuery({
        queryKey: ['students'],
        queryFn: StudentService.getAllStudents
    });
}

export function useGetSubjectsOfTeacherQuery(teacherId) {
    return useQuery({
        queryKey: ['teacherSubjects', teacherId],
        queryFn: () => TeacherService.getSubjectsOfTeacher(teacherId)
    });
}

export function useGetOneSubjectQuery(subjectId) {
    return useQuery({
        queryKey: ['subject', subjectId],
        queryFn: () => SubjectService.getOneSubject(subjectId)
    });
}

export function useGetOneStandardQuery(standardId) {
    return useQuery({
        queryKey: ['standard', standardId],
        queryFn: () => StandardService.getOneStandard(standardId)
    });
}

export function useGetStudentsOfStandardQuery(standardId) {
    return useQuery({
        queryKey: ['standardStudents', standardId],
        queryFn: () => StandardService.getStudentsOfStandard(standardId)
    });
}