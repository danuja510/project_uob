package com.elearning.projectuob.recommender.dto;

import lombok.Data;

import java.util.List;

@Data
public class Recommendations {
    private List<Long> itemIds;
}
