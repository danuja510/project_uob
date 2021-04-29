package com.elearning.projectuob.dto;

import com.elearning.projectuob.entity.Teacher;
import lombok.Data;

import java.util.List;

@Data
public class TeacherRecommendations {
    private List<Teacher> teachers;
}
