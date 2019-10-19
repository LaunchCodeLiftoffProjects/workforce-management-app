package org.launchcode.workforce.service;

import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.repository.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }
    public List<Client> getAll(){
        return clientRepository.findAll();
    }
    public Client addClient(Client client){
        return clientRepository.save(client);
    }


    }




