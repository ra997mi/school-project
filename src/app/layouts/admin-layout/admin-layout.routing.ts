import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/auth.guard';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { StudentComponent } from '../../student/student.component';
import { VideosComponent } from '../../videos/videos.component';
import { WeeklyComponent } from '../../weekly/weekly.component';
import { AddWeeklyComponent } from '../../add-weekly/add-weekly.component';
import { AddVideoComponent } from '../../add-video/add-video.component';
import { EditVideoComponent } from '../../edit-video/edit-video.component';
import { HomeworkComponent } from '../../homework/homework.component'
import { NotifyComponent } from '../../notify/notify.component';
import { AllNotifyComponent } from '../../all-notify/all-notify.component';
import { CoursesComponent } from '../../courses/courses.component'
import { AbsentComponent } from '../../absent/absent.component';
import { DegreeComponent } from '../../degree/degree.component';
import { ArticlesComponent } from '../../articles/articles.component';
import { AddArticleComponent } from '../../add-article/add-article.component';
import { EditArticleComponent } from '../../edit-article/edit-article.component';
import { PaymentComponent } from '../../payment/payment.component';
import { PayComponent } from '../../pay/pay.component';
import { TransComponent } from '../../trans/trans.component';
import { PenaltyComponent } from '../../penalty/penalty.component';
import { HolidaysComponent } from '../../holidays/holidays.component';
import { ExamComponent } from '../../exam/exam.component';
import { StaffComponent } from '../../staff/staff.component';
import { AttitudeComponent } from '../../attitude/attitude.component';
import { HistoryComponent } from '../../history/history.component';
import { ExpensesComponent } from '../../expenses/expenses.component';
import { ReportComponent } from '../../report/report.component';
import { ChatComponent } from '../../chat/chat.component';
import { RequestComponent } from 'app/request/request.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'articles', component: ArticlesComponent, canActivate: [AuthGuard] },
    { path: 'add-article', component: AddArticleComponent, canActivate: [AuthGuard] },
    { path: 'edit-article', component: EditArticleComponent, canActivate: [AuthGuard] },
    { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
    { path: 'homework', component: HomeworkComponent, canActivate: [AuthGuard] },
    { path: 'videos', component: VideosComponent, canActivate: [AuthGuard] },
    { path: 'add-video', component: AddVideoComponent, canActivate: [AuthGuard] },
    { path: 'edit-video', component: EditVideoComponent, canActivate: [AuthGuard] },
    { path: 'weekly', component: WeeklyComponent, canActivate: [AuthGuard] },
    { path: 'notify', component: NotifyComponent, canActivate: [AuthGuard] },
    { path: 'all-notify', component: AllNotifyComponent, canActivate: [AuthGuard] },
    { path: 'add-weekly', component: AddWeeklyComponent, canActivate: [AuthGuard] },
    { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
    { path: 'absent', component: AbsentComponent, canActivate: [AuthGuard] },
    { path: 'degree', component: DegreeComponent, canActivate: [AuthGuard] },
    { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
    { path: 'pay', component: PayComponent, canActivate: [AuthGuard] },
    { path: 'trans', component: TransComponent, canActivate: [AuthGuard] },
    { path: 'penalty', component: PenaltyComponent, canActivate: [AuthGuard] },
    { path: 'holiday', component: HolidaysComponent, canActivate: [AuthGuard] },
    { path: 'exam', component: ExamComponent, canActivate: [AuthGuard] },
    { path: 'staff', component: StaffComponent, canActivate: [AuthGuard] },
    { path: 'attitude', component: AttitudeComponent, canActivate: [AuthGuard] },
    { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
    { path: 'expenses', component: ExpensesComponent, canActivate: [AuthGuard] },
    { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
    {path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
    {path: 'request', component: RequestComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/dashboard' }
];
