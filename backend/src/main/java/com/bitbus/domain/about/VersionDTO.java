package com.bitbus.domain.about;

import lombok.Data;

@Data
public class VersionDTO {

    private String buildName;
    private String version;
    private String gitCommitId;
    private String gitBranch;

}
