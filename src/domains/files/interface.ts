export interface File {
  type: string;
  id: string;
  attributes: {
    variant_id: number;
    identifier: string;
    name: string;
    extension: string;
    download_url: string;
    size: string;
    size_formatted: string;
    version: string;
    sort: number;
    status: string;
    created_at: string;
    updated_at: string;
  };
  relationships: {
    variants: {
      related: string;
      self: string;
    };
  };
  links: {
    self: string;
  };
}
