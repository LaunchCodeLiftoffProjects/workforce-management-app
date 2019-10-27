package org.launchcode.workforce.controller;


import org.launchcode.workforce.model.ClientName;
import org.launchcode.workforce.service.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clientName")
public class ClientUsersController {
    private ClientService clientService;

    public ClientUsersController(ClientService clientService){
        this.clientService = clientService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ClientName> getAll(){
        return clientService.getAll();
    }
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.OK)
    public ClientName addNew(@RequestBody ClientName clientName){
        return clientService.addClientName(clientName);
    }

    @GetMapping("/{id}")
    ResponseEntity<ClientName> get(@PathVariable Long id) {
        Optional<ClientName> clientName = clientService.get(id);
        if (clientName.isPresent()) {
            return ResponseEntity.ok().body(clientName.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PutMapping
    ResponseEntity<ClientName> update(@RequestBody ClientName newClientName) {
        Optional<ClientName> staffClients = clientService.update(newClientName);
        if (staffClients.isPresent()) {
            return ResponseEntity.ok().body(staffClients.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) {
        if (clientService.delete(id)) {
            return ResponseEntity.ok().build();
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }


}











