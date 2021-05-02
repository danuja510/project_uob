package com.elearning.projectuob.service;

import com.elearning.projectuob.dto.SchedulerObject;
import net.minidev.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class SchedulerServiceImpl implements SchedulerService {

    final String url = "http://localhost:8082/api/scheduler/";

    @Override
    public SchedulerObject scheduleMeeting(SchedulerObject schedulerObject) {
        return null;
    }

    @Override
    public SchedulerObject getMeeting(SchedulerObject schedulerObject) {
        return null;
    }

    @Override
    public SchedulerObject deleteMeeting(SchedulerObject schedulerObject) {
        return null;
    }

    @Override
    public List<SchedulerObject> getMeetings(SchedulerObject schedulerObject) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject schedulerJsonObject = new JSONObject();
        schedulerJsonObject.put("zoomUserId", schedulerObject.getZoomUserId());
        schedulerJsonObject.put("userPass", schedulerObject.getUserPass());
        schedulerJsonObject.put("zoomApiSecret", schedulerObject.getZoomApiSecret());
        schedulerJsonObject.put("zoomApiKey", schedulerObject.getZoomApiKey());
        schedulerJsonObject.put("meetingId", schedulerObject.getMeetingId());
        schedulerJsonObject.put("meetingUrl", schedulerObject.getMeetingUrl());
        schedulerJsonObject.put("startTime", schedulerObject.getStartTime());
        schedulerJsonObject.put("timeZone", schedulerObject.getTimeZone());
        schedulerJsonObject.put("meetingType", schedulerObject.getMeetingType());
        schedulerJsonObject.put("topic", schedulerObject.getTopic());
        System.out.println(schedulerJsonObject.toString());
        HttpEntity<String> request = new HttpEntity<String>(schedulerJsonObject.toString(), headers);

        try{
            SchedulerObject[] meetings = restTemplate.postForObject(url + "list-sessions", request, SchedulerObject[].class);
            return Arrays.asList(meetings);
        }catch (Exception e){
            return null;
        }
    }
}
