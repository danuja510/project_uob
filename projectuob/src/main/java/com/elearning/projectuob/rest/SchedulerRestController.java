package com.elearning.projectuob.rest;

import com.elearning.projectuob.dao.TeacherZoomCredentialsRepository;
import com.elearning.projectuob.dto.SchedulerObject;
import com.elearning.projectuob.entity.TeacherZoomCredentials;
import com.elearning.projectuob.service.SchedulerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scheduler")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SchedulerRestController {

    SchedulerService schedulerService;
    TeacherZoomCredentialsRepository teacherZoomCredentialsRepository;

    @Autowired
    public SchedulerRestController (SchedulerService schedulerService, TeacherZoomCredentialsRepository teacherZoomCredentialsRepository){
        this.schedulerService = schedulerService;
        this.teacherZoomCredentialsRepository = teacherZoomCredentialsRepository;
    }

    @GetMapping("/list-sessions")
    public List<SchedulerObject> getMeetings (@RequestParam int teacherId){
        TeacherZoomCredentials teacherZoomCredentials = teacherZoomCredentialsRepository.findByTeacherIdEquals((long)teacherId);
        SchedulerObject schedulerObject = new SchedulerObject();
        schedulerObject.setMeetingType(2);
        schedulerObject.setZoomUserId(teacherZoomCredentials.getZoomUserId());
        schedulerObject.setUserPass(teacherZoomCredentials.getZoomPassword());
        schedulerObject.setZoomApiSecret(teacherZoomCredentials.getZoomApiSecret());
        schedulerObject.setZoomApiKey(teacherZoomCredentials.getZoomApiKey());
        return this.schedulerService.getMeetings(schedulerObject);
    }

    @PostMapping("/create-session")
    public SchedulerObject createMeeting (@RequestParam int teacherId, @RequestBody SchedulerObject schedulerObject){
        TeacherZoomCredentials teacherZoomCredentials = teacherZoomCredentialsRepository.findByTeacherIdEquals((long)teacherId);
        schedulerObject.setMeetingType(2);
        schedulerObject.setZoomUserId(teacherZoomCredentials.getZoomUserId());
        schedulerObject.setUserPass(teacherZoomCredentials.getZoomPassword());
        schedulerObject.setZoomApiSecret(teacherZoomCredentials.getZoomApiSecret());
        schedulerObject.setZoomApiKey(teacherZoomCredentials.getZoomApiKey());
        return this.schedulerService.scheduleMeeting(schedulerObject);
    }

    @PostMapping("/delete-session")
    public SchedulerObject deleteMeeting (@RequestParam int teacherId, @RequestBody SchedulerObject schedulerObject){
        TeacherZoomCredentials teacherZoomCredentials = teacherZoomCredentialsRepository.findByTeacherIdEquals((long)teacherId);
        schedulerObject.setMeetingType(2);
        schedulerObject.setZoomUserId(teacherZoomCredentials.getZoomUserId());
        schedulerObject.setUserPass(teacherZoomCredentials.getZoomPassword());
        schedulerObject.setZoomApiSecret(teacherZoomCredentials.getZoomApiSecret());
        schedulerObject.setZoomApiKey(teacherZoomCredentials.getZoomApiKey());
        return this.schedulerService.deleteMeeting(schedulerObject);
    }

    @PostMapping("/validate-credentials")
    public boolean validateCredentials(@RequestBody SchedulerObject schedulerObject){
        try{
           return this.schedulerService.getMeetings(schedulerObject).size()>=0;
        }catch (Exception e){
            return false;
        }
    }
}
