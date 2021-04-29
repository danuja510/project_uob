package com.elearning.projectuob.dto;

import lombok.Data;

@Data
public class AggregatedRatings {
    private final Long itemId;
    private final double rating;

    public AggregatedRatings(Double rating, Long itemId) {
        this.rating = rating == null ? 0 : rating;
        this.itemId = itemId == null ? 0 : itemId.longValue();
    }
}
