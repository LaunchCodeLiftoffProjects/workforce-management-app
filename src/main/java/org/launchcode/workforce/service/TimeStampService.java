package org.launchcode.workforce.service;

import org.launchcode.workforce.model.TimeStamp;
import org.launchcode.workforce.repository.TimeStampRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimeStampService {
    private TimeStampRepository timeStampRepository;

    public TimeStampService(TimeStampRepository timeStampRepository) {
        this.timeStampRepository = timeStampRepository;
    }

    public List<TimeStamp> getAll() { return timeStampRepository.findAll(); }

    public Optional<TimeStamp> get(Long id) { return timeStampRepository.findById(id); }

    public List<TimeStamp> getByClient(Long clientId) {
        return timeStampRepository.findByClientId(clientId); }
public String getClientState(Long clientId) {
        String clientState;
        if (timeStampRepository.findByClientId(clientId) == null) {
            clientState = "IN";
        }
        else {
            ArrayList<TimeStamp> clientTimeStamps = timeStampRepository.findByClientId(clientId);
            int size = clientTimeStamps.size();
            TimeStamp holder = clientTimeStamps.get(size - 1);
            if(holder.getClientState().equals("IN") ) {
                clientState = "OUT";
            }
            else{
                clientState = "IN";
            }
        }

        return clientState;
    }

    public TimeStamp add(Long clientId) {
        String clientState = getClientState(clientId);
        //get a new date and align it w
        Calendar calendar = Calendar.getInstance();
        Date stamp= calendar.getTime();
        TimeStamp newStamp = new TimeStamp(clientId,clientState, stamp);

        return timeStampRepository.save(newStamp);
    }

    public Optional<TimeStamp> update(TimeStamp timeStamp) {
        if (timeStampRepository.existsById(timeStamp.getId())) {
            timeStampRepository.save(timeStamp);
            return Optional.of(timeStamp);
        }
        return Optional.empty();
    }
}
