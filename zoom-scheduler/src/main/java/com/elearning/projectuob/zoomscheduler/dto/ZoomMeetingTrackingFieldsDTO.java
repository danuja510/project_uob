package com.elearning.projectuob.zoomscheduler.dto;

import java.io.Serializable;

public class ZoomMeetingTrackingFieldsDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    public String field;

    public String value;

    public Boolean visible;

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Boolean getVisible() {
        return visible;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

    @Override
    public String toString() {
        return "ZoomMeetingTrackingFieldsDTO [field=" + getField() + ", value=" + getValue() + ", visible=" + getVisible() + "]";
    }
}
