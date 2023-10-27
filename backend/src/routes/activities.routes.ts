import { Router } from 'express';

import { ActivitiesRepository } from '../repositories/ActivitiesRepository';

const activitiesRoutes = Router();
const activitiesRepository = new ActivitiesRepository();

activitiesRoutes.post('/', (request, response) => {
  const { code, description, color } = request.body;

  const activityAlreadyExists = activitiesRepository.findByCode(code);

  if (activityAlreadyExists) {
    return response.status(400).json({ error: 'Activity already exists!' });
  }

  activitiesRepository.create({ code, description, color });

  return response.status(201).send(201);
});

activitiesRoutes.get('/', (request, response) => {
  const activities = activitiesRepository.list();

  return response.json(activities);
});

export { activitiesRoutes };
