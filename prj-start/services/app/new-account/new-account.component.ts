import { Component } from '@angular/core';
import { LoggingService } from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],

})
export class NewAccountComponent {
    constructor(private LoggingService; LoggingService,
        private accountsService: AccountsService) {
            this.accountsService.statusUpdated.subscribe(
                (status: string) => alert('New Status: ' + status)
            );
        }
        OncreateAccount(accountName: string, accountStatus: string){
            this.accountsService.addAccount(accountName, accountStatus);
        }
}