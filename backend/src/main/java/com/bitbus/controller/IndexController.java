package com.bitbus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    // Map future views here
    @RequestMapping(value = {"/"})
    ModelAndView mapToIndex() {
        return new ModelAndView("forward://index.html");
    }
}
