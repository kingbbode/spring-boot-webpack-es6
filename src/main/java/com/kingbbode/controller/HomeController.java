package com.kingbbode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by YG_king on 2016-11-07.
 */
@Controller
public class HomeController {

    @GetMapping(value = "/{page}")
    public String home(Model model, @PathVariable String page){
        model.addAttribute("message",page);
        return page;
    }
}
