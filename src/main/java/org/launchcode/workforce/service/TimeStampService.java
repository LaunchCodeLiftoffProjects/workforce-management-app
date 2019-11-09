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

    public TimeStamp add(TimeStamp timeStamp) { return timeStampRepository.save(timeStamp); }

    public Optional<TimeStamp> update(TimeStamp timeStamp) {
        if (timeStampRepository.existsById(timeStamp.getId())) {
            timeStampRepository.save(timeStamp);
            return Optional.of(timeStamp);
        }
        return Optional.empty();
    }

    //place archive time option here...
}
