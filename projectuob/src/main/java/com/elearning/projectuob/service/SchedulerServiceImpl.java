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
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject schedulerJsonObject = schedulerObjectToJSONObject(schedulerObject);
        HttpEntity<String> request = new HttpEntity<String>(schedulerJsonObject.toString(), headers);
        schedulerObject = restTemplate.postForObject(url + "create-session", request, SchedulerObject.class);
        schedulerObject.setZoomApiSecret(null);
        schedulerObject.setZoomApiKey(null);
        schedulerObject.setUserPass(null);
        schedulerObject.setZoomUserId(null);
        return schedulerObject;
    }

    @Override
    public SchedulerObject getMeeting(SchedulerObject schedulerObject) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject schedulerJsonObject = schedulerObjectToJSONObject(schedulerObject);
        HttpEntity<String> request = new HttpEntity<String>(schedulerJsonObject.toString(), headers);
        schedulerObject = restTemplate.postForObject(url + "get-session", request, SchedulerObject.class);
        schedulerObject.setZoomApiSecret(null);
        schedulerObject.setZoomApiKey(null);
        schedulerObject.setUserPass(null);
        schedulerObject.setZoomUserId(null);
        return schedulerObject;
    }

    @Override
    public SchedulerObject deleteMeeting(SchedulerObject schedulerObject) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject schedulerJsonObject = schedulerObjectToJSONObject(schedulerObject);
        HttpEntity<String> request = new HttpEntity<String>(schedulerJsonObject.toString(), headers);
        schedulerObject = restTemplate.postForObject(url + "delete-session", request, SchedulerObject.class);
        schedulerObject.setZoomApiSecret(null);
        schedulerObject.setZoomApiKey(null);
        schedulerObject.setUserPass(null);
        schedulerObject.setZoomUserId(null);
        return schedulerObject;
    }

    @Override
    public List<SchedulerObject> getMeetings(SchedulerObject schedulerObject) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        JSONObject schedulerJsonObject = schedulerObjectToJSONObject(schedulerObject);
        HttpEntity<String> request = new HttpEntity<String>(schedulerJsonObject.toString(), headers);
        try{
            SchedulerObject[] meetings = restTemplate.postForObject(url + "list-sessions", request, SchedulerObject[].class);
            List<SchedulerObject> meetingsList = Arrays.asList(meetings);
            for (SchedulerObject schedulerObject1: meetingsList ) {
                schedulerObject1.setZoomApiSecret(null);
                schedulerObject1.setZoomApiKey(null);
                schedulerObject1.setUserPass(null);
                schedulerObject1.setZoomUserId(null);
            }
            return meetingsList;
        }catch (Exception e){
            return null;
        }
    }

    private JSONObject schedulerObjectToJSONObject(SchedulerObject schedulerObject){
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
        return schedulerJsonObject;
    }
}
