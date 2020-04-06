export * from './branches.service';
import { BranchesService } from './branches.service';
export * from './companies.service';
import { CompaniesService } from './companies.service';
export * from './groups.service';
import { GroupsService } from './groups.service';
export * from './shippingmethods.service';
import { ShippingmethodsService } from './shippingmethods.service';
export * from './users.service';
import { UsersService } from './users.service';
export const APIS = [BranchesService, CompaniesService, GroupsService, ShippingmethodsService, UsersService];