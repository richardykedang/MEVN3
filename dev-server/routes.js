import taskRoutes from './api/task/task-route';
import regRoutes from './api/register/register-route';
import userRoutes from './api/user/user-route';
import authRoutes from './api/auth/auth-route';

export function registerRoutes(app) {
    app.use('/api', taskRoutes);
    app.use('/api', regRoutes);
    app.use('/api', userRoutes);
    app.use('/api', authRoutes);

}