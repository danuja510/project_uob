package com.elearning.projectuob.zoomscheduler.controller;

import com.elearning.projectuob.zoomscheduler.dto.SchedulerDTO;
import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingObjectDTO;
import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingsListResponseDTO;
import com.elearning.projectuob.zoomscheduler.service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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
    public SchedulerDTO scheduleMeeting(@RequestBody SchedulerDTO schedulerDTO){
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
        schedulerDTO.setThroughZoomMeetingObjectDTO(zoomMeetingObjectDTO);
        return schedulerDTO;
    }

    @GetMapping("/list-sessions")
    public List<SchedulerDTO> listMeetings(@RequestBody SchedulerDTO schedulerDTO){
        ZoomMeetingsListResponseDTO zoomMeetingsListResponseDTO = this.schedulerService.listMeetings(
                schedulerDTO.getZoomUserId(),
                schedulerDTO.getMeetingType(),
                schedulerDTO.getZoomApiSecret(),
                schedulerDTO.getZoomApiKey()
        );
        List<SchedulerDTO> meetings = new ArrayList<>();
        for (ZoomMeetingObjectDTO meeting: zoomMeetingsListResponseDTO.getMeetings()) {
            meetings.add(new SchedulerDTO(meeting));
        }
        return meetings;
    }

    @GetMapping("/get-session")
    public SchedulerDTO getMeetingById(@RequestBody SchedulerDTO schedulerDTO){
        ZoomMeetingObjectDTO zoomMeetingObjectDTO = this.schedulerService.getZoomMeetingById(
                schedulerDTO.getMeetingId(),
                schedulerDTO.getZoomApiSecret(),
                schedulerDTO.getZoomApiKey()
        );
        schedulerDTO.setThroughZoomMeetingObjectDTO(zoomMeetingObjectDTO);
        return schedulerDTO;
    }

    @DeleteMapping("/delete-session")
    public SchedulerDTO deleteMeetingById(@RequestBody SchedulerDTO schedulerDTO){
        try {
            ZoomMeetingObjectDTO zoomMeetingObjectDTO = this.schedulerService.deleteZoomMeetingById(
                    schedulerDTO.getMeetingId(),
                    schedulerDTO.getZoomApiSecret(),
                    schedulerDTO.getZoomApiKey()
            );
            schedulerDTO.setThroughZoomMeetingObjectDTO(zoomMeetingObjectDTO);
        }catch (NullPointerException e){
            return null;
        }
        return schedulerDTO;
    }
}
