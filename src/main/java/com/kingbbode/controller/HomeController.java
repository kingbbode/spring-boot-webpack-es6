package com.kingbbode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by YG_king on 2016-11-07.
 */
@Controller
public class HomeController {

    @GetMapping(value = "/")
    public String home(Model model){
        model.addAttribute("message","hello");
        return "index";
    }
}
