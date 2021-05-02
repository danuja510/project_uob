package com.elearning.projectuob.dto;

import lombok.Data;

@Data
public class SchedulerObject {
    private String zoomUserId;
    private String userPass;
    private String zoomApiSecret;
    private String zoomApiKey;
    private String meetingId;
    private String meetingUrl;
    private String startTime;
    private String timeZone;
    private int meetingType;
    private String topic;
}
