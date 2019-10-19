package org.launchcode.workforce.controller;


import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientUsersController {

        private ClientService clientService;

        public ClientUsersController(ClientService clientService)
        {
            this.clientService = clientService;
        }

        @GetMapping
        @ResponseStatus(HttpStatus.OK)
        public List<Client> getAll()
        {
            return clientService.getAll();
        }

        @PostMapping("/new")
        @ResponseStatus(HttpStatus.OK)
        public Client addNew(@RequestBody Client client)
        {
            return clientService.addClient(client);
        }
    }