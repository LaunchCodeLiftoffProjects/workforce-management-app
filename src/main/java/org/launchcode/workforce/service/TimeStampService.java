package org.launchcode.workforce.service;

import org.launchcode.workforce.model.Client;
import org.launchcode.workforce.model.TimeStamp;
import org.launchcode.workforce.repository.TimeStampRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TimeStampService {
    private TimeStampRepository timeStampRepository;

    public TimeStampService(TimeStampRepository timeStampRepository) {
        this.timeStampRepository = timeStampRepository;
    }

    public List<TimeStamp> getAll() { return timeStampRepository.findAll(); }

    public Optional<TimeStamp> get(Long id) { return timeStampRepository.findById(id); }
    public TimeStamp get1(Long id) {return timeStampRepository.getOne(id);}

    public ArrayList<TimeStamp> getByClientId(Long clientId) {
        return timeStampRepository.findByClientId(clientId);
    }

    //figure out how to do find by date range

    private boolean getClientState(Long clientId) {
        boolean clientState;
        // client state true indicates clocked in status
        ArrayList<TimeStamp> clientStamps = getByClientId(clientId);
        if (clientStamps.isEmpty()) {
            return true;
        }
        else {

            int size = clientStamps.size();
            TimeStamp holder = clientStamps.get(size - 1);

            if(holder.isClientState() == true ) {
                clientState = false;
            }
            else{
                clientState = true;
            }
        }

        return clientState;
    }

    public TimeStamp add(Long clientId, Client client) {
        boolean clientState = getClientState(clientId);
        TimeStamp timeStamp = new TimeStamp(clientId, clientState, new Date());

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
