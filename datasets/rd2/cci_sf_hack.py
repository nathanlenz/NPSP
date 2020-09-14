from snowfakery.output_streams import SqlOutputStream
from cumulusci.tasks.salesforce import BaseSalesforceApiTask


real_create_or_validate_tables = SqlOutputStream.create_or_validate_tables


def create_or_validate_tables(self, inferred_tables):
    mappings = self.mappings
    self.mappings = None
    real_create_or_validate_tables(self, inferred_tables)
    self.mappings = mappings


class CCIHack(BaseSalesforceApiTask):
    def __call__(self, *args, **kwargs):
        SqlOutputStream.create_or_validate_tables = create_or_validate_tables
