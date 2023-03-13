import {
  CheckoutOptions,
  CreateCheckoutResponse,
  GetCheckoutResponse,
  GetCheckoutsResponse,
} from './domains/checkouts';
import { GetCustomerResponse, GetCustomersResponse } from './domains/customers';
import {
  GetDiscountRedemptionResponse,
  GetDiscountRedemptionsResponse,
} from './domains/discount-redemptions';
import {
  CreateDiscountResponse,
  DeleteDiscountResponse,
  DiscountOptions,
  GetDiscountResponse,
  GetDiscountsResponse,
} from './domains/discounts';
import { GetFileResponse, GetFilesResponse } from './domains/files';
import {
  GetLicenseKeyInstanceResponse,
  GetLicenseKeyInstancesResponse,
} from './domains/license-key-instances';
import {
  GetLicenseKeyResponse,
  GetLicenseKeysResponse,
} from './domains/license-keys';
import {
  GetOrderItemResponse,
  GetOrderItemsResponse,
} from './domains/order-items';
import { GetOrderResponse, GetOrdersResponse } from './domains/orders';
import { GetProductRespense, GetProductsResponse } from './domains/products';
import { GetStoreResponse, GetStoresResponse } from './domains/stores';
import {
  GetSubscriptionInvoiceResponse,
  GetSubscriptionInvoicesResponse,
} from './domains/subscription-invoices';
import {
  CancelSubscriptionResponse,
  GetSubscriptionResponse,
  GetSubscriptionsResponse,
  UpdateSubscriptionResponse,
} from './domains/subscriptions';
import { GetVariantResponse, GetVariantsResponse } from './domains/variants';

export type TMethods = {
  /**
   * This handler gets the currently authenticated user.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/users
   * @returns a user object.
   */
  getUser<R>(): Promise<R>;

  /**
   * This handler gets a store by the ID.
   * @param {string} id the identifier of a store.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a store object.
   */
  getStore<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your stores.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/stores
   * @returns a set of `store` objects, ordered by name.
   */
  getStores<R>(): Promise<R>;

  /**
   * This handler gets a paginatated object of all your stores.
   * @param {string} id the identifier of a customer's profile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a `customer` object.
   */
  getCustomer<R>(id: string): Promise<R>;

  /**
   * This handler gets a paginatated object of all your customers.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `customer` objects, ordered by created_at field in descending order.
   */
  getCustomers(): Promise<GetCustomersResponse>;

  /**
   * This handler gets a product by the ID.
   * @param {string} id the identifier of a product.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  getProduct(id: string): Promise<GetProductRespense>;

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a set of `products` objects, ordered by created_at field in descending order.
   */
  getProducts(): Promise<GetProductsResponse>;

  /**
   * This handler gets a variant by the ID.
   * @param {string} id the identifier of a product's variant.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product objects.
   */
  getVariant(id: string): Promise<GetVariantResponse>;

  /**
   * This handler gets a paginatated object of all your products.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `variant` objects, ordered by created_at field in descending order.
   */
  getVariants(): Promise<GetVariantsResponse>;

  /**
   * This handler gets a file by the ID.
   * @param {string} id the identifier of a file's profile.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a product object.
   */
  getFile(id: string): Promise<GetFileResponse>;

  /**
   * This handler gets a paginatated object of all your files.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `file` objects, ordered by created_at field in descending order.
   */
  getFiles(): Promise<GetFilesResponse>;

  /**
   * This handler gets an order by the ID.
   * @param {string} id the identifier of an order.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order` object.
   */
  getOrder(id: string): Promise<GetOrderResponse>;

  /**
   * This handler gets a paginatated object of all your orders.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order` objects, ordered by created_at field in descending order.
   */
  getOrders(): Promise<GetOrdersResponse>;

  /**
   * This handler gets an order item by the ID.
   * @param {string} id the identifier of an order item.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  getOrderItem(id: string): Promise<GetOrderItemResponse>;

  /**
   * This handler gets a paginatated object of all your order items.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `order item` objects, ordered by created_at field in descending order.
   */
  getOrderItems(): Promise<GetOrderItemsResponse>;

  /**
   * This handler updates a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  updateSubscription(id: string): Promise<UpdateSubscriptionResponse>;

  /**
   * This handler gets a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription` object.
   */
  getSubscription(id: string): Promise<GetSubscriptionResponse>;

  /**
   * This handler gets a paginatated object of all your subscriptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription` objects, ordered by created_at field in descending order.
   */
  getSubscriptions(): Promise<GetSubscriptionsResponse>;

  /**
   * This handler cancels a subscription by the ID.
   * @param {string} id the identifier of a subscription.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `order item` object.
   */
  cancelSubscription(id: string): Promise<CancelSubscriptionResponse>;

  /**
   * This handler gets a subscription invoice by the ID.
   * @param {string} id the identifier of a subscription invoice.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `subscription invoice` object.
   */
  getSubscriptionInvoice(id: string): Promise<GetSubscriptionInvoiceResponse>;

  /**
   * This handler gets a paginatated object of all your subscription invoices.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `subscription invoices` objects, ordered by created_at field in descending order.
   */
  getSubscriptionInvoices(): Promise<GetSubscriptionInvoicesResponse>;

  /**
   * This handler creates a custom checkout.
   * @param {options} CheckoutOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  createDiscount(options: DiscountOptions): Promise<CreateDiscountResponse>;

  /**
   * This handler gets a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `discount` object.
   */
  getDiscount(id: string): Promise<GetDiscountResponse>;

  /**
   * This handler deletes a discount by the ID.
   * @param {string} id the identifier of a discount.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount` object.
   */
  deleteDiscount(id: string): Promise<DeleteDiscountResponse>;

  /**
   * This handler gets a paginatated object of all your discounts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discounts` objects, ordered by created_at field in descending order.
   */
  getDiscounts(): Promise<GetDiscountsResponse>;

  /**
   * This handler gets a discount redemption by the ID.
   * @param {string} id the identifier of a discount redemption.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  getDiscountRedemption(id: string): Promise<GetDiscountRedemptionResponse>;

  /**
   * This handler gets a paginatated object of all your discount redemptions.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  getDiscountRedemptions(): Promise<GetDiscountRedemptionsResponse>;

  /**
   * This handler gets a license key by the ID.
   * @param {string} id the identifier of a license key.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns an `discount redemption` object.
   */
  getLicenseKey(id: string): Promise<GetLicenseKeyResponse>;

  /**
   * This handler gets a paginatated object of all your license keys.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `discount redemptions` objects, ordered by created_at field in descending order.
   */
  getLicenseKeys(): Promise<GetLicenseKeysResponse>;

  /**
   * This handler gets a license key instance by the ID.
   * @param {string} id the identifier of a license key instance.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `license key instance` object.
   */
  getLicenseKeyInstance(id: string): Promise<GetLicenseKeyInstanceResponse>;

  /**
   * This handler gets a paginatated object of all your license key instances.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `license key instances` objects, ordered by created_at field in descending order.
   */
  getLicenseKeyInstances(): Promise<GetLicenseKeyInstancesResponse>;

  /**
   * This handler creates a custom checkout.
   * @param {option} CheckoutOptions the configurations for the custome checkout page.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  createCheckout(options: CheckoutOptions): Promise<CreateCheckoutResponse>;

  /**
   * This handler gets a checkout by the ID.
   * @param {string} id the identifier of a checkout.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/products
   * @returns a `checkout` object.
   */
  getCheckout(id: string): Promise<GetCheckoutResponse>;

  /**
   * This handler gets a paginatated object of all your custom checkouts.
   * @docs Refer to: https://docs.lemonsqueezy.com/api/customers
   * @returns a set of `checkouts` objects, ordered by created_at field in descending order.
   */
  getCheckouts: () => Promise<GetCheckoutsResponse>;
};

export type TLmnsqzyFunctions = {
  /**
   * a collection of handlers to interact with the LMNSQZY API
   */
  lmnsqzy: () => TMethods;
  /**
   * a dummy string for showing that it works.
   */
  doesWork: () => string;
};
