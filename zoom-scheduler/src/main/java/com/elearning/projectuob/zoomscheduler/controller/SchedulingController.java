package com.elearning.projectuob.zoomscheduler.controller;

import com.elearning.projectuob.zoomscheduler.dto.SchedulerDTO;
import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingObjectDTO;
import com.elearning.projectuob.zoomscheduler.service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/scheduler")
@CrossOrigin("http://localhost:8080")
public class SchedulingController {

    private SchedulerService schedulerService;

    @Autowired
    public SchedulingController (SchedulerService schedulerService){
        this.schedulerService = schedulerService;
    }

    @PostMapping("/create-session")
    public SchedulerDTO scheduleMeeting(SchedulerDTO schedulerDTO){
        ZoomMeetingObjectDTO zoomMeetingObjectDTO = new ZoomMeetingObjectDTO();
        zoomMeetingObjectDTO.setType(schedulerDTO.getMeetingType());
        zoomMeetingObjectDTO.setTimezone(schedulerDTO.getTimeZone());
        zoomMeetingObjectDTO.setStart_time(schedulerDTO.getStartTime());
        zoomMeetingObjectDTO.setTopic(schedulerDTO.getTopic());
        zoomMeetingObjectDTO = this.schedulerService.createMeeting(
                zoomMeetingObjectDTO,
                schedulerDTO.getZoomUserId(),
                schedulerDTO.getUserPass(),
                schedulerDTO.getZoomApiSecret(),
                schedulerDTO.getZoomApiKey()
        );
        schedulerDTO.setMeetingId(zoomMeetingObjectDTO.getId().toString());
        schedulerDTO.setMeetingUrl(zoomMeetingObjectDTO.getJoin_url());
        return schedulerDTO;
    }
}
