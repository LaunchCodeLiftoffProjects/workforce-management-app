package org.launchcode.workforce.controller;

import org.launchcode.workforce.model.ClientsJobs;
import org.launchcode.workforce.service.ClientsJobsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/clients_jobs")
public class ClientsJobsController {

    private ClientsJobsService clientsJobsService;

    public ClientsJobsController(ClientsJobsService clientsJobsService) {
        this.clientsJobsService = clientsJobsService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    ClientsJobs add(@RequestBody ClientsJobs clientsJobs) {
        return clientsJobsService.add(clientsJobs);
    }

    



}
