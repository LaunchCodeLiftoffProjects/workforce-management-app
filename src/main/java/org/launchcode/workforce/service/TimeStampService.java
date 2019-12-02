package org.launchcode.workforce.service;

import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.model.TimeStamp;
import org.launchcode.workforce.repository.TimeStampRepository;
import org.springframework.stereotype.Service;
import org.launchcode.workforce.service.ClientService;

import java.util.*;

@Service
public class TimeStampService {
    private TimeStampRepository timeStampRepository;

    private ClientService clientService;

    public TimeStampService(TimeStampRepository timeStampRepository) {
        this.timeStampRepository = timeStampRepository;
    }

    public List<TimeStamp> getAll() { return timeStampRepository.findAll(); }

    public Optional<TimeStamp> get(Long id) { return timeStampRepository.findById(id); }

    public ArrayList<TimeStamp> getByClient(Client client) {
        return timeStampRepository.findByClient(client);
    }

    //figure out how to do find by date range

    private boolean getClientState(Client client) {
        boolean clientState;
        // client state true indicates clocked in status
        ArrayList<TimeStamp> clientStamps = getByClient(client);
        if (clientStamps.isEmpty()) {
            return true;
        }
        else {

            int size = clientStamps.size();
            TimeStamp holder = clientStamps.get(size - 1);

            if(holder.isClientState() ) {
                clientState = false;
            }
            else{
                clientState = true;
            }
        }

        return clientState;
    }

    public TimeStamp add(Long id) {
        Client client = clientService.getClient(id);
        boolean clientState = getClientState(client);
        //boolean clientState = getClientState(timeStamp.;
        TimeStamp timeStamp = new TimeStamp(client, clientState, new Date());

        return timeStampRepository.save(timeStamp);
    }

    public Optional<TimeStamp> update(TimeStamp timeStamp) {
        if (timeStampRepository.existsById(timeStamp.getId())) {
            timeStampRepository.save(timeStamp);
            return Optional.of(timeStamp);
        }
        return Optional.empty();
    }
}
