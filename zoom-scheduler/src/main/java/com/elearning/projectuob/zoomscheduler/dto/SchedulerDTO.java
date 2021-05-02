package com.elearning.projectuob.zoomscheduler.dto;

import lombok.Data;

@Data
public class SchedulerDTO {
    private String zoomUserId;
    private String userPass;
    private String zoomApiSecret;
    private String zoomApiKey;
    private Long meetingId;
    private String meetingUrl;
    private String startTime;
    private String timeZone;
    private int meetingType;
    private String topic;

    public SchedulerDTO(){}

    public SchedulerDTO(ZoomMeetingObjectDTO zoomMeetingObjectDTO){
        this.meetingId = zoomMeetingObjectDTO.getId();
        this.meetingUrl = zoomMeetingObjectDTO.getJoin_url();
        this.startTime = zoomMeetingObjectDTO.getStart_time();
        this.timeZone = zoomMeetingObjectDTO.getTimezone();
        this.meetingType = zoomMeetingObjectDTO.getType();
        this.topic = zoomMeetingObjectDTO.getTopic();
    }

    public void setThroughZoomMeetingObjectDTO(ZoomMeetingObjectDTO zoomMeetingObjectDTO){
        this.meetingId = zoomMeetingObjectDTO.getId();
        this.meetingUrl = zoomMeetingObjectDTO.getJoin_url();
    }
}
