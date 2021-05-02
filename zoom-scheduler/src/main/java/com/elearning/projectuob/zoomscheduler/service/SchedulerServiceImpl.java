package com.elearning.projectuob.zoomscheduler.service;

import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingObjectDTO;
import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingSettingsDTO;
import com.elearning.projectuob.zoomscheduler.dto.ZoomMeetingsListResponseDTO;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.security.Key;
import java.util.Date;
import java.util.UUID;

@Service
public class SchedulerServiceImpl implements SchedulerService{
    @Override
    public ZoomMeetingObjectDTO createMeeting(ZoomMeetingObjectDTO zoomMeetingObjectDTO, String zoomUserId, String userPass, String zoomApiSecret, String zoomApiKey) {
        System.out.println("Request to create a Zoom meeting");
        // replace zoomUserId with your user ID
        String apiUrl = "https://api.zoom.us/v2/users/" + zoomUserId + "/meetings";

        // replace with your password or method
        zoomMeetingObjectDTO.setPassword(userPass);
        // replace email with your email
        zoomMeetingObjectDTO.setHost_email("danuja.kalugamaarachchi@study.beds.ac.uk");
        zoomMeetingObjectDTO.setType(2);

        // Optional Settings for host and participant related options
        ZoomMeetingSettingsDTO settingsDTO = new ZoomMeetingSettingsDTO();
        settingsDTO.setJoin_before_host(false);
        settingsDTO.setParticipant_video(true);
        settingsDTO.setHost_video(false);
        settingsDTO.setAuto_recording("cloud");
        settingsDTO.setMute_upon_entry(true);
        zoomMeetingObjectDTO.setSettings(settingsDTO);

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + generateZoomJWTToken(zoomApiSecret, zoomApiKey));
        headers.add("content-type", "application/json");
        HttpEntity<ZoomMeetingObjectDTO> httpEntity = new HttpEntity<ZoomMeetingObjectDTO>(zoomMeetingObjectDTO, headers);
        ResponseEntity<ZoomMeetingObjectDTO> zEntity = restTemplate.exchange(apiUrl, HttpMethod.POST, httpEntity, ZoomMeetingObjectDTO.class);
        if(zEntity.getStatusCodeValue() == 201) {
            System.out.println("Zoom meeting response {}"+ zEntity);
            return zEntity.getBody();
        } else {
            System.out.println("Error while creating zoom meeting {}"+ zEntity.getStatusCode());
        }
        return zoomMeetingObjectDTO;
    }

    @Override
    public ZoomMeetingsListResponseDTO listMeetings(String userIdOrEmail, int meetingType, String zoomApiSecret, String zoomApiKey) {
        System.out.println("Request to list all Zoom meetings by User id or email {}"+ userIdOrEmail);
        // replace me with user id in case, listing meetings for a different user than admin
        String listMeetingUrl = "https://api.zoom.us/v2/users/me/meetings";
        // replace either user Id or email here with your user id/email
//        if(userIdOrEmail.isPresent()) {
        listMeetingUrl = "https://api.zoom.us/v2/users/"+ userIdOrEmail +"/meetings";
//        }
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + generateZoomJWTToken(zoomApiSecret, zoomApiKey));
        headers.add("content-type", "application/json");
        HttpEntity<?> requestEntity = new HttpEntity<>(headers);
        UriComponentsBuilder urlBuilder = UriComponentsBuilder.fromHttpUrl(listMeetingUrl);
//        if(meetingType.isPresent()) {
        urlBuilder.queryParam("type", meetingType);
//        }
        ResponseEntity<ZoomMeetingsListResponseDTO> response = restTemplate
                .exchange(urlBuilder.toUriString(), HttpMethod.GET, requestEntity, ZoomMeetingsListResponseDTO.class);
        if(response.getStatusCodeValue() == 200) {
            return response.getBody();
        } else if (response.getStatusCodeValue() == 404) {
//            throw new Exception("User id or email not found for supplied value");
            return null;
        }
        return null;
    }

    @Override
    public ZoomMeetingObjectDTO getZoomMeetingById(Long meetingId, String zoomApiSecret, String zoomApiKey) {
        System.out.println("Request to get single meeting by id {}"+ meetingId);
        String getMeetingUrl = "https://api.zoom.us/v2/meetings/" + meetingId;
        System.out.println("Meeting Url {}"+getMeetingUrl);
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + generateZoomJWTToken(zoomApiSecret, zoomApiKey));
        headers.add("content-type", "application/json");
        HttpEntity<?> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<ZoomMeetingObjectDTO> zoomEntityRes =  restTemplate
                .exchange(getMeetingUrl, HttpMethod.GET, requestEntity, ZoomMeetingObjectDTO.class);
        if(zoomEntityRes.getStatusCodeValue() == 200) {
            return zoomEntityRes.getBody();
        } else if (zoomEntityRes.getStatusCodeValue() == 404) {
//            throw new Exception("User id or email not found for supplied value");
            return null;
        }
        return null;
    }

    @Override
    public ZoomMeetingObjectDTO deleteZoomMeetingById(Long meetingId,String zoomApiSecret, String zoomApiKey) {
        System.out.println("Request to delete single meeting by id {}"+ meetingId);
        String getMeetingUrl = "https://api.zoom.us/v2/meetings/" + meetingId;
        System.out.println("Meeting Url {}"+getMeetingUrl);
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + generateZoomJWTToken(zoomApiSecret, zoomApiKey));
        headers.add("content-type", "application/json");
        HttpEntity<?> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<ZoomMeetingObjectDTO> zoomEntityRes =  restTemplate
                .exchange(getMeetingUrl, HttpMethod.DELETE, requestEntity, ZoomMeetingObjectDTO.class);
        if(zoomEntityRes.getStatusCodeValue() == 204) {
            return zoomEntityRes.getBody();
        } else if (zoomEntityRes.getStatusCodeValue() == 404) {
//            throw new Exception("User id or email not found for supplied value");
            return null;
        }
        return null;
    }

    @Override
    public String generateZoomJWTToken(String zoomApiSecret, String zoomApiKey) {
        String id = UUID.randomUUID().toString().replace("-", "");
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

        Date creation = new Date(System.currentTimeMillis());
        Date tokenExpiry = new Date(System.currentTimeMillis() + (1000 * 60));

        Key key = Keys
                .hmacShaKeyFor(zoomApiSecret.getBytes());
        return Jwts.builder()
                .setId(id)
                .setIssuer(zoomApiKey)
                .setIssuedAt(creation)
                .setSubject("")
                .setExpiration(tokenExpiry)
                .signWith(signatureAlgorithm, key)
                .compact();
    }
}
