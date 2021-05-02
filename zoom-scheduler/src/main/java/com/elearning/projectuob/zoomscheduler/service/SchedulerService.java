package com.elearning.projectuob.zoomscheduler.service;

import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingObjectDTO;
import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingsListResponseDTO;

public interface SchedulerService {

    public ZoomMeetingObjectDTO createMeeting(ZoomMeetingObjectDTO zoomMeetingObjectDTO, String zoomUserId, String userPass, String zoomApiSecret, String zoomApiKey);

    /**
     * Request to list all meetings by userId/email of the user
     *
     * @param userIdOrEmail optional userId/email value
     *
     * @param meetingType scheduled/live/upcoming
     *
     * @return zoomMeetingsListResponseDTO the dto containing list of meetings
     */
    public ZoomMeetingsListResponseDTO listMeetings(String userIdOrEmail, int meetingType, String zoomApiSecret, String zoomApiKey);

    /**
     * Get ZoomMeeting by Meeting id
     *
     * @param meetingId the id of meeting from Zoom
     * @return the meetingObjectDTO with meeting details
     */
    public ZoomMeetingObjectDTO getZoomMeetingById(Long meetingId, String zoomApiSecret, String zoomApiKey);

    /**
     * Get ZoomMeeting by Meeting id
     *
     * @param meetingId the id of meeting from Zoom
     */
    public ZoomMeetingObjectDTO deleteZoomMeetingById(Long meetingId, String zoomApiSecret, String zoomApiKey);

    /**
     * Generate JWT token for Zoom using api credentials
     *
     * @return JWT Token String
     */
    public String generateZoomJWTToken(String zoomApiSecret, String zoomApiKey);
}
