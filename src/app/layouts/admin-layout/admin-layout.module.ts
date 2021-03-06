import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPrintModule } from 'ngx-print';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { StudentComponent } from '../../student/student.component';
import { VideosComponent } from '../../videos/videos.component';
import { WeeklyComponent } from '../../weekly/weekly.component';
import { AddWeeklyComponent } from '../../add-weekly/add-weekly.component';
import { AddVideoComponent } from '../../add-video/add-video.component';
import { EditVideoComponent } from '../../edit-video/edit-video.component';
import { ConfirmDeleteComponent } from '../../confirm-delete/confirm-delete.component';
import { HomeworkComponent } from '../../homework/homework.component'
import { NotifyComponent } from '../../notify/notify.component';
import { AllNotifyComponent } from '../../all-notify/all-notify.component';
import { CoursesComponent } from '../../courses/courses.component'
import { AbsentComponent } from '../../absent/absent.component';
import { DegreeComponent } from '../../degree/degree.component';
import { ArticlesComponent } from '../../articles/articles.component';
import { AddArticleComponent } from '../../add-article/add-article.component';
import { EditArticleComponent } from '../../edit-article/edit-article.component';
import { ArticleViewComponent } from '../../article-view/article-view.component';
import { NgxTrumbowygModule } from 'ngx-trumbowyg';
import { PaymentComponent } from '../../payment/payment.component';
import { PayComponent } from '../../pay/pay.component';
import { TransComponent } from '../../trans/trans.component';
import { PenaltyComponent } from '../../penalty/penalty.component';
import { HolidaysComponent } from '../../holidays/holidays.component';
import { ExamComponent } from '../../exam/exam.component';
import { StaffComponent } from '../../staff/staff.component';
import { AttitudeComponent } from '../../attitude/attitude.component'
import { HistoryComponent } from '../../history/history.component'
import { ExpensesComponent } from '../../expenses/expenses.component'
import { ReportComponent } from '../../report/report.component';
import { ChatComponent } from 'app/chat/chat.component';
import { RequestComponent } from 'app/request/request.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    NgxYoutubePlayerModule.forRoot(),
    NgxSpinnerModule,
    NgxPrintModule,
    NgxTrumbowygModule.withConfig({
      lang: 'ar',
      svgPath: '/assets/icons.svg',
      removeformatPasted: true,
      autogrow: true,
      btns: [
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['link'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen'],
        ['insertImage']
      ],
      events: {}
    }),
  ],
  declarations: [
    ConfirmDeleteComponent,
    DashboardComponent,
    StudentComponent,
    VideosComponent,
    WeeklyComponent,
    AddWeeklyComponent,
    AddVideoComponent,
    EditVideoComponent,
    HomeworkComponent,
    NotifyComponent,
    AllNotifyComponent,
    CoursesComponent,
    AbsentComponent,
    DegreeComponent,
    ArticleViewComponent,
    ArticlesComponent,
    AddArticleComponent,
    EditArticleComponent,
    PaymentComponent,
    PayComponent,
    TransComponent,
    PenaltyComponent,
    HolidaysComponent,
    ExamComponent,
    StaffComponent,
    AttitudeComponent,
    HistoryComponent,
    ExpensesComponent,
    ReportComponent,
    ChatComponent,
    RequestComponent
  ],
  entryComponents: [ConfirmDeleteComponent, ArticleViewComponent]
})

export class AdminLayoutModule { }
