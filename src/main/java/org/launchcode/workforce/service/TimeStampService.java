package org.launchcode.workforce.service;

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

    public ArrayList<TimeStamp> getByClient(Long clientId) {
        return timeStampRepository.findByClientId(clientId); }
/**
    private boolean getClientState(Long clientId) {
        boolean clientState;
        // client state true indicates clocked in status
        ArrayList<TimeStamp> clientStamps;
        clientStamps = getByClient(clientId);
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

    public TimeStamp add(TimeStamp timeStamp) {
        boolean clientState = getClientState(timeStamp.getClientId());
        //get a new date and align it w
        timeStamp.setTimeStamp(new Date());
        timeStamp.setClientState(clientState);

        return timeStampRepository.save(timeStamp);
    }
**/
    public Optional<TimeStamp> update(TimeStamp timeStamp) {
        if (timeStampRepository.existsById(timeStamp.getId())) {
            timeStampRepository.save(timeStamp);
            return Optional.of(timeStamp);
        }
        return Optional.empty();
    }

    //place archive time option here...
}
