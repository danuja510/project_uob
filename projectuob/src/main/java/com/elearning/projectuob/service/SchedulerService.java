package com.elearning.projectuob.service;

import com.elearning.projectuob.dto.SchedulerObject;

import java.util.List;

public interface SchedulerService {

    public SchedulerObject scheduleMeeting(SchedulerObject schedulerObject);

    public SchedulerObject getMeeting(SchedulerObject schedulerObject);

    public SchedulerObject deleteMeeting(SchedulerObject schedulerObject);

    public List<SchedulerObject> getMeetings(SchedulerObject schedulerObject);
}
