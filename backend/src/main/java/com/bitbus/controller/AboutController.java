package com.bitbus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.BuildProperties;
import org.springframework.boot.info.GitProperties;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bitbus.domain.about.VersionDTO;

@RestController
@RequestMapping("about")
public class AboutController {

    @Autowired
    private GitProperties _gitProperties;
    @Autowired
    private BuildProperties _buildProperties;

    @RequestMapping("version")
    VersionDTO getVersionDetails() {
        VersionDTO versionDTO = new VersionDTO();
        versionDTO.setBuildName(_buildProperties.getName());
        versionDTO.setVersion(_buildProperties.getVersion());
        versionDTO.setGitBranch(_gitProperties.getBranch());
        versionDTO.setGitCommitId(_gitProperties.getCommitId());
        return versionDTO;
    }
}
